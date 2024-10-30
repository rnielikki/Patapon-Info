# setDisablePercussionView

Enables or disables visualising the drum hit icon. **Works only when drum view is enabled in system setting**.

## Code Information

- **Name**: `setDisablePercussionView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 1b 00`
- **Assembly Address in Memory** : `0x8971030`

## Parameters

- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to enable/disable the visual. Set 0 to target all.
- `(bool)disabled` *(8 bytes)* : **1 to disable**, 0 to enable.

## Example

Here is one example in hex:

```25 0c 1b 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisablePercussionView((int)3, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08971030(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar3 != 0) {
    func_0x08b5f6e8(iVar3,*puVar1,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

