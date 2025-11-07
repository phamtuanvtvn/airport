# Codemagic + Appetize.io Setup Guide

## Step 1: Prepare iOS Project Structure

1. Ensure you have `ios/` folder with Xcode project
2. If using React Native: `npx react-native init` or `cd ios && pod install`
3. If using Flutter: `flutter create .` or ensure `ios/Runner.xcworkspace` exists

## Step 2: Set up Codemagic Account

1. Go to [codemagic.io](https://codemagic.io) and sign up
2. Connect your GitHub/GitLab/Bitbucket repository
3. Grant necessary permissions for repository access

## Step 3: Configure iOS Code Signing (Updated)

### Option A: Development Build (No App Store needed)
1. In Codemagic dashboard → App Settings → iOS code signing
2. Select "Automatic" code signing
3. Or use development certificates instead of distribution

### Option B: Simulator Build (Recommended - No signing required)
1. Build targets iOS Simulator automatically
2. No certificates or profiles needed
3. Perfect for testing with Appetize.io
4. No Apple Developer account required

## Alternative: Use Personal Team ID

If you have a free Apple Developer account:
1. Use your personal Team ID in Xcode project
2. Set distribution type to `development`
3. Bundle ID format: `com.yourname.airport`

## Step 4: Set up Appetize.io

1. Create account at [appetize.io](https://appetize.io)
2. Generate API token in Account Settings
3. Note your API token for Codemagic environment variables

## Step 5: Configure Environment Variables

In Codemagic dashboard → App Settings → Environment variables:

```
APPETIZE_API_TOKEN=your_appetize_api_token_here
BUNDLE_ID=com.yourcompany.airport
```

Note: No signing certificates needed for simulator builds!

## Step 6: Trigger Build

1. Push changes to your repository
2. Codemagic will automatically detect `codemagic.yaml`
3. Monitor build progress in Codemagic dashboard
4. Build artifacts will be uploaded to Appetize.io automatically

## Step 7: Test on Appetize.io

1. Build completion email will contain Appetize.io link
2. Or check your Appetize.io dashboard for uploaded apps
3. Click to launch iOS simulator in browser

## Troubleshooting

- **Build fails**: Check Xcode project settings (no signing issues with simulator)
- **Simulator build**: Look for .app file instead of .ipa in artifacts
- **Appetize compatibility**: Simulator builds work perfectly with Appetize.io

## Manual Upload to Appetize.io (Alternative)

If automatic upload fails, manually upload .ipa:
1. Download .ipa from Codemagic artifacts
2. Go to appetize.io dashboard
3. Click "Upload App" and select your .ipa file
