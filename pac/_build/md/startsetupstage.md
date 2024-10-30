# startSetupStage

Declares definition of certain stage group with the given ID. Paired with *[endSetupStage](./endsetupstage.md)*.

Used when there is scene change with background change (Pandora family).

Called just before starting stage setup through [addStage](./addstage_25165d00.md), thus called in 2nd phase of mission loading.

More information in [How To: Setup Stages](./guide/how-to-setup-stages.md).

## Code Information

- **Name**: `startSetupStage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5b 00`
- **Assembly Address in Memory** : `0x891fd68`

## Parameters

- `(int)stage_index` *(8 bytes)* : Index of the stage in the mission. Used by [applyStage](./applystage.md).

## Remarks

This is paired with *[endSetupStage](./endsetupstage.md)* until the setup is completely done.

## Example

Here is one example in hex:

```25 16 5b 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
startSetupStage((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891fd68(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_088b03e0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118),*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

