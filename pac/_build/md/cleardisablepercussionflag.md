# clearDisablePercussionFlag

Clears [enable/disable](./setdisablepercussionflag.md) status of the drums.

## Code Information

- **Name**: `clearDisablePercussionFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 19 00`
- **Assembly Address in Memory** : `0x8970f54`

## Parameters

- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to reset (enable) the hit enabled status, 0 targets all drums.
- `(bool)is_clear` *(8 bytes)* : 1 to make it functional. 0 will preserve the state.

## Example

Here is one example in hex:

```25 0c 19 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
clearDisablePercussionFlag((int)3, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970f54(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  func_0x08b5f900(*puVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

