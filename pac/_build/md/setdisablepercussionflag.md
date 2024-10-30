# setDisablePercussionFlag

Enables or disables specific drum or all drums.

## Code Information

- **Name**: `setDisablePercussionFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 18 00`
- **Assembly Address in Memory** : `0x8970ee8`

## Parameters

- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to activate/deactivate the input. Set 0 to target all.
- `(bool)disabled` *(8 bytes)* : **1 to disable**, 0 to enable.

## Example

Here is one example in hex:

```25 0c 18 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisablePercussionFlag((int)3, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970ee8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  func_0x08b5f878(*puVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

